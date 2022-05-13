import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
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

  return (
    <ScrollView style={styles.container}>
      <PostpayWidget
        merchantId={merchantId}
        widgetType={widgetType}
        amount={amount}
        currency={currency}
        locale={locale}
        widgetUrl={widgetUrl}
        numInstalments={numInstalments}
      />
    </ScrollView>
  );
};

export default Widget;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});
