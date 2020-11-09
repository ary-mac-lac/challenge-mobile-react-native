import React from 'react'
import { View } from 'react-native'

import SearchField from '../Components/SearchField'
import { Button, Separator } from '../../../Components'

import getStyles from './FilterHeader.style'

interface Props {
  onChangeNameFilter: (text: string) => void
  onToggleFavoritesFilter: () => void
  favoritesFilterActive: boolean
}

const FilterHeader: React.FC<Props> = ({ onChangeNameFilter, onToggleFavoritesFilter, favoritesFilterActive }) => {
  const styles = getStyles()

  return (
    <>
      <View style={styles.row}>
        <SearchField
          noDelay
          placeholder={'Filter by name'}
          onChangeValue={onChangeNameFilter}
          style={styles.searchField}
          buttonAccessibilityLabel={'Filter by name'}
          buttonAccessibilityHint={'Click to filter by the value in the search field to the right'}
        />
        {/* 
            Even though it looks like a button, this component represents a sort of boolean value: filter or do not filter.
            This makes it functionally much more like a checkbox than a button, which is why accessibilityRole = checkbox 
        */}
        <Button.Icon
          style={styles.favoriteFilter}
          icon={favoritesFilterActive ? 'star' : 'star-outline'}
          onPress={onToggleFavoritesFilter}
          accessibilityRole={'checkbox'}
          accessibilityLabel={'Filter by favorited characters'}
          accessibilityHint={'Click to toggle a list of your favorite characters'}
          accessibilityState={{
            checked: favoritesFilterActive,
          }}
        />
      </View>
      <Separator style={styles.separator} />
    </>
  )
}

export default FilterHeader
