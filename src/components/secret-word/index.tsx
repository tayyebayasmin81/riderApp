import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import AppColors from '~utils/app-colors';
import styles from './styles';
import {Button} from '~components';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {width} from '~utils';

// Component Props
type Props = {
  onPressConfirm: () => void;
  modalRef?: React.RefObject<BottomSheetModalMethods>;
  handleModalChange: (index: number) => void;
};

const SecretWord: React.FC<Props> = ({
  modalRef,
  onPressConfirm,
  handleModalChange,
}) => {
  const [needCarpool, setNeedCarpool] = useState(false);
  return (
    <>
      <BottomSheetModal
        backgroundStyle={styles.bottomSheetModal}
        handleIndicatorStyle={styles.handleIndicator}
        onChange={handleModalChange}
        ref={modalRef}>
        <BottomSheetView>
          {/* Modal Content */}
          <View style={styles.modalContainer}>
            {!needCarpool && (
              <>
                <View>
                  <Text style={styles.title}>Secret Word</Text>
                  <Text style={styles.subtitle}>
                    For your youth’s safety, the driver will confirm this secret
                    word with your youth before the ride starts. This ensures
                    secure pickups.
                  </Text>
                </View>
                <View style={styles.searchContainer}>
                  <TextInput
                    placeholderTextColor={AppColors.gray90}
                    style={styles.searchInput}
                    placeholder="Jonny Pappa"
                  />
                </View>
                <Button
                  containerStyle={styles.confirmButton}
                  onPress={() => setNeedCarpool(true)}
                  title="Continue"
                />
              </>
            )}
            {needCarpool && (
              <>
                <View style={{marginBottom: width(5)}}>
                  <Text style={styles.title}>
                    Need <Text style={{color: AppColors.primary}}>Carpool</Text>
                    ?
                  </Text>
                  <Text style={styles.subtitle}>
                    For your youth’s safety, the driver will confirm this secret
                    word with your youth before the ride starts. This ensures
                    secure pickups.
                  </Text>
                </View>
                <Button
                  containerStyle={styles.confirmButton}
                  onPress={() => onPressConfirm()}
                  title="Yes, I do"
                />
                <Button
                  containerStyle={styles.withoutBtn}
                  onPress={() => onPressConfirm()}
                  title="No, continue without"
                />
              </>
            )}
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export default SecretWord;
