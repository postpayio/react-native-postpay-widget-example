import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Home = ({navigation}) => {
  const [info, setInfo] = useState({
    widgetType: 'payment-summary',
    locale: 'en',
    numInstalments: null,
    merchantId: 'id_c56705f1a9304e8c8a16e1da98ec8734',
    amount: '20050',
    currency: 'AED',
    widgetUrl: 'https://widgets-dev.postpay.io',
  });

  const renderButton = type => (item, index) => {
    const backgroundColor =
      item === info[type] ? 'rgba(156,123,12,0.5)' : 'transparent';
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.buttonItem,
          {
            backgroundColor,
          },
        ]}
        onPress={() => {
          updateValue(type, item);
        }}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  const updateValue = (type, value) => {
    setInfo(pre => ({...pre, [type]: value}));
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapCustom}>
        <Text style={styles.paddingBottom}>Custom fields</Text>
        <Title value="widgetType" />
        <View style={styles.row}>
          {['payment-summary', 'product'].map(renderButton('widgetType'))}
        </View>
        <Title value="locale" />
        <View style={styles.row}>
          {['en', 'ar'].map(renderButton('locale'))}
        </View>
        <Title value="amount" />
        <TextInput
          defaultValue={info.amount}
          style={styles.input}
          onChangeText={val => {
            updateValue('amount', val);
          }}
        />
        <Title value="numInstalments" />
        <TextInput
          defaultValue={info.numInstalments}
          style={styles.input}
          onChangeText={val => {
            updateValue('numInstalments', val);
          }}
        />
        <Title value="widgetUrl" />
        <TextInput
          defaultValue={info.widgetUrl}
          style={styles.input}
          onChangeText={val => {
            updateValue('widgetUrl', val);
          }}
        />
      </View>
      <Button
        title="Open widget"
        onPress={() => {
          navigation.navigate('Widget', {...info});
        }}
      />
    </View>
  );
};

const Title = ({value}) => <Text style={styles.title}>{value}</Text>;

export default Home;

const styles = StyleSheet.create({
  row: {flexDirection: 'row'},
  paddingBottom: {paddingBottom: 12},
  wrapCustom: {padding: 20},
  buttonItem: {
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
  },
  container: {flex: 1, marginTop: 20},
  title: {fontSize: 16, fontWeight: 'bold'},
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    lineHeight: 21,
    height: 40,
  },
});
