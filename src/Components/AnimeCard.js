import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from '@ui-kitten/components'
import { scale } from 'react-native-size-matters'
import { ExplicitWarning } from '@/Components'
import { useNavigation } from '@react-navigation/native'

const AnimeCard = ({ title, rating, year, score, images, showId }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={[styles.card, styles.shadowProp]}
      onPress={() =>
        navigation.navigate('DetailScreen', {
          showId,
          title,
          score,
          images,
          rating,
        })
      }
    >
      <View style={[styles.contentContainer]}>
        <View style={[styles.imageContainer]}>
          <Image
            source={{ uri: images.jpg.image_url }}
            style={[styles.imageStyle]}
          />
        </View>
        <View style={[styles.infoContainer]}>
          <Text category="label" numberOfLines={2} ellipsizeMode="tail">
            {title}
          </Text>
          <Text
            category="s1"
            appearance="hint"
            style={[styles.subTextStyle, { paddingTop: scale(5) }]}
          >
            RATING : {rating || '-'}
          </Text>
          <Text category="s1" appearance="hint" style={[styles.subTextStyle]}>
            SCORE : {score || '-'}
          </Text>
          <Text category="s1" appearance="hint" style={[styles.subTextStyle]}>
            YEAR : {year || '-'}
          </Text>
          <View style={{ paddingTop: scale(5) }}>
            {rating === 'R+ - Mild Nudity' && <ExplicitWarning />}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default AnimeCard

const styles = StyleSheet.create({
  imageContainer: {
    flex: 5,
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageStyle: {
    height: scale(90),
    width: scale(110),
    borderRadius: scale(3),
  },
  card: {
    backgroundColor: 'white',
    borderRadius: scale(8),
    paddingVertical: scale(16),
    paddingHorizontal: scale(16),
    marginVertical: scale(5),
    marginHorizontal: scale(10),
  },
  infoContainer: {
    flex: 7,
  },
  subTextStyle: {
    fontSize: scale(12),
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: scale(3),
  },
})
