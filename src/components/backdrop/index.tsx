// CustomBackdrop.tsx
import React, {useCallback} from 'react';
import {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {StyleSheet} from 'react-native';

interface CustomBackdropProps {
  bottomSheetModalRef: React.RefObject<any>; // Adjust type as needed
  animatedIndex?: number; // To control the animated index
  onPress?: () => void;
}

const CustomBackdrop: React.FC<CustomBackdropProps> = ({
  bottomSheetModalRef,
  animatedIndex = 1,
}) => {
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        style={styles.backdrop}
        appearsOnIndex={1}
        onPress={() => bottomSheetModalRef?.current?.close()}
        animatedIndex={{
          value: animatedIndex,
        }}
      />
    ),
    [bottomSheetModalRef, animatedIndex],
  );

  return renderBackdrop({});
};

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },
});
export default CustomBackdrop;
