import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { styles } from './styles';
import { api } from '../../services/api';
import { theme } from '../../theme';
import { useTransactions } from '../../contexts/TransactionsContext';
import { useNavigation } from '@react-navigation/native';

interface Category {
  id: number;
  name: string;
}

export function Register() {
  const { createTransaction } = useTransactions();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('income');
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryId, setCategoryId] = useState('');
  const navigation = useNavigation();

  function resetForm() {
    setTitle('');
    setPrice('');
    setCategoryId('');
    setType('income');
  }

  async function handleSave() {
    if (!title || !price || !categoryId) {
      return Alert.alert('🧐 Atenção', 'Por favor, preencha todos os campos');
    }

    const payload = {
      title,
      type,
      price: Number(price),
      category_id: Number(categoryId),
    };

    try {
      await createTransaction(payload);
      resetForm();

      navigation.navigate('Home');
    } catch {
      return Alert.alert(
        '😥 Opa',
        'Problema ao salvar a transação, tente novamente!'
      );
    }
  }

  useEffect(() => {
    api.get('categories').then(response => {
      setCategories(response.data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Header />

        <View style={styles.form}>
          <Text style={styles.title}>Cadastro</Text>

          <Input
            label="Nome"
            value={title}
            onChangeText={value => setTitle(value)}
          />

          <Input
            label="Preço"
            keyboardType="numeric"
            value={price}
            onChangeText={value => setPrice(value)}
          />

          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => setType('income')}
              style={[
                styles.button,
                {
                  marginRight: '4%',
                  backgroundColor:
                    type === 'income' ? '#d6e0d3' : 'transparent',
                },
              ]}
            >
              <Image
                style={styles.buttonImage}
                source={require('../../assets/income.png')}
              />
              <Text style={styles.buttonText}>Income</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setType('outcome')}
              style={[
                styles.button,
                {
                  backgroundColor:
                    type === 'outcome' ? '#e6d3d3' : 'transparent',
                },
              ]}
            >
              <Image
                style={styles.buttonImage}
                source={require('../../assets/outcome.png')}
              />
              <Text style={styles.buttonText}>Outcome</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={categoryId}
              onValueChange={value => setCategoryId(value)}
            >
              <Picker.Item label="Selecione uma categoria" value="" />
              {categories.map(category => (
                <Picker.Item
                  key={category.id}
                  label={category.name}
                  value={category.id}
                />
              ))}
            </Picker>
          </View>

          <Button onPress={handleSave} label="Enviar" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
