import {View, Text} from 'react-native';
import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {ParamListBase, Route, RouteProp} from '@react-navigation/native';
import {SimpleRecycler} from 'react-native-simple-recyclerlistview';
import SingleUser from './orgnization/SingleUser';
import ScreenRatio from '../../components/constants/ScreenRatio';
import styles from './styles';
import usegetUserDetails from '../HomeScreen/api_hooks/getUserDetails/usegetUserDetails';
import {RefreshControl} from 'react-native-gesture-handler';
import {ActivityIndicator} from 'react-native-paper';
import colors from '../../components/constants/colors';
import Buttons from 'react-native-custom-buttons';

const UserList: FC = () => {
  const {getUserDetails} = usegetUserDetails();
  const [refreshing, setRefreshing] = useState(false);
  const recyclerRef = useRef<SimpleRecycler>(null);
  const [loading, setLoading] = useState(true);
  const pageData = useRef({
    currentPage: 0,
    totalPage: 0,
  });
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    let data: any = await getUserDetails(1);
    pageData.current = {
      currentPage: data?.info?.page,
      totalPage: 10,
    };
    if (data) {
      setLoading(false);
      recyclerRef?.current?.loadDataFromApi(data?.results);
    }
  };

  const onEndReached = useCallback(async () => {
    if (pageData.current?.currentPage !== pageData?.current?.totalPage) {
      let data: any = await getUserDetails(pageData.current?.currentPage + 1);
      pageData.current.currentPage = data?.info?.page;
      if (data) {
        setLoading(false);
        recyclerRef?.current?.loadMoreData(data?.results);
      }
    }
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadData();
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size={20} color={colors.black} />
        </View>
      ) : (
        <SimpleRecycler
          ref={recyclerRef}
          rowRenderer={(_type, data, index, _extendedState) => {
            return <SingleUser index={index} item={data?.item} />;
          }}
          height={ScreenRatio.height}
          width={ScreenRatio.width}
          emptyText="No Data Found"
          emptyTextStyle={styles.emptyText}
          scrollViewProps={{
            refreshControl: (
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            ),
          }}
          renderFooter={() => (
            <View>
              <Buttons
                type="Text"
                onPress={onEndReached}
                title="Load More Data"
              />
              <View style={{height: 100}} />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default UserList;
