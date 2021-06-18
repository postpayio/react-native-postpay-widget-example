import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import {PostpayWidget} from 'react-native-postpay-widget';

const Widget = ({route}) => {
  const {
    widgetType,
    locale,
    numInstalments,
    merchantId,
    amount,
    currency,
    widgetUrl,
  } = route.params || {};
  console.log(route.params);
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <PostpayWidget
        merchantId={merchantId}
        widgetType={widgetType}
        amount={amount}
        currency={currency}
        locale={locale}
        widgetUrl={widgetUrl}
        numInstalments={numInstalments}
        style={
          {
            //   paddingHorizontal: 20,
            // marginTop: DIMENSION_PADDING_SMALL,
          }
        }
      />
    </ScrollView>
  );
};

export default Widget;

const styles = StyleSheet.create({});
