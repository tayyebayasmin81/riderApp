import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Button} from '~components';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {Icons} from '~assets/images';
import {Image} from 'react-native';

// Component Props
type Props = {
  onPressConfirm: () => void;
  modalRef?: React.RefObject<BottomSheetModalMethods>;
  handleModalChange: (index: number) => void;
};

const RiderSummary: React.FC<Props> = ({modalRef, handleModalChange}) => {
  const [rating, setRating] = useState(2);
  const [comment, setComment] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tags = ['Good!', 'Amazing Experience!', 'Awesome'];

  const handleRatingPress = (star: React.SetStateAction<number>) => {
    setRating(star);
  };

  const handleTagPress = (tag: string) => {
    setSelectedTag(tag);
  };
  return (
    <>
      <BottomSheetModal
        backgroundStyle={styles.bottomSheetModal}
        handleIndicatorStyle={styles.handleIndicator}
        ref={modalRef}
        onChange={handleModalChange}>
        <BottomSheetView>
          {/* Modal Content */}
          <View style={styles.modalContainer}>
            <Text style={styles.title}>Write a Review</Text>
            <Text style={styles.subtitle}>
              How was your experience with Mac Williamson?
            </Text>

            {/* Rating Stars */}
            <View style={styles.ratingContainer}>
              {[1, 2, 3, 4, 5].map(star => (
                <TouchableOpacity
                  key={star}
                  onPress={() => handleRatingPress(star)}>
                  <Image
                    source={Icons.star}
                    style={styles.star}
                    tintColor={star <= rating ? '#FFA500' : '#D3D3D3'}
                  />
                </TouchableOpacity>
              ))}
            </View>

            {/* Tags */}
            <View style={styles.tagsContainer}>
              {tags.map(tag => (
                <TouchableOpacity
                  key={tag}
                  style={[
                    styles.tagButton,
                    selectedTag === tag && styles.selectedTagButton,
                  ]}
                  onPress={() => handleTagPress(tag)}>
                  <Text style={styles.tagText}>{tag}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Comment Box */}
            <TextInput
              style={styles.commentBox}
              placeholder="Extra..."
              placeholderTextColor="#A9A9A9"
              value={comment}
              onChangeText={setComment}
              multiline
            />

            {/* Submit Button */}
            <Button
              containerStyle={styles.confirmButton}
              onPress={() => {}}
              title="Submit"
            />
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export default RiderSummary;
