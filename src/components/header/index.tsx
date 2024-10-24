import React from 'react';
import {View, Text, TouchableOpacity, Image, ViewStyle} from 'react-native';
import styles from './styles';
import {Icons} from '~assets/images';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  showNotificationIcon?: boolean;
  showHistoryIcon?: boolean;
  titleStyle?: ViewStyle;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showHistoryIcon,
  showBackButton = false,
  onBackPress,
  showNotificationIcon = true,
  titleStyle,
}) => {
  return (
    <View style={styles.topBar}>
      {/* Back Button */}
      {showBackButton && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Image source={Icons.left} resizeMode="contain" style={styles.icon} />
        </TouchableOpacity>
      )}

      <View style={[styles.titleContainer, titleStyle]}>
        <Text style={styles.titleText}>{title}</Text>
        {subtitle && (
          <Text style={styles.subtitleText} numberOfLines={1}>
            {subtitle}
          </Text>
        )}
      </View>

      {/* Notification Icon */}
      {showNotificationIcon && (
        <Image source={Icons.bell} resizeMode="contain" style={styles.icon} />
      )}
      {showHistoryIcon && (
        <Image source={Icons.clock} resizeMode="contain" style={styles.icon} />
      )}
    </View>
  );
};

export default Header;
