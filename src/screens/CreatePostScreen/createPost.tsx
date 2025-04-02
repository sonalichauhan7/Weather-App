import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './createPost.styles';
import {useCreatePost} from './useCreatePost';
import {AppStrings} from '../../utils/strings';
import {AppColors} from '../../constants/app.colors';

export const CreatePost = () => {
  const {text, image, handleTitle, uploadImage, handleSubmit, onCancel} =
    useCreatePost();

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <Text style={styles.hedding}>{AppStrings.CreatePost.createNewPost}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={AppStrings.CreatePost.titlePlaceholder}
          placeholderTextColor={AppColors.white}
          value={text}
          onChangeText={handleTitle}
          multiline
          textAlignVertical="top"
          scrollEnabled={true}
          maxLength={45}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={uploadImage}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>
          {AppStrings.CreatePost.uploadImage}
        </Text>
      </TouchableOpacity>

      {image && <Image source={{uri: image}} style={styles.imagePreview} />}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.cancelBtn]}
          onPress={onCancel}
          activeOpacity={0.8}>
          <Text style={[styles.buttonText, styles.cancelTxt]}>
            {AppStrings.CreatePost.cancel}
          </Text>
        </TouchableOpacity>
        {image && text && (
          <TouchableOpacity
            style={[styles.button]}
            onPress={handleSubmit}
            activeOpacity={0.8}>
            <Text style={styles.buttonText}>{AppStrings.CreatePost.post}</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};
