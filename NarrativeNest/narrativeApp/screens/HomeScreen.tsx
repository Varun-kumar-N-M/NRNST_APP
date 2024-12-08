import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList, 
  SafeAreaView 
} from 'react-native';
import * as CONST from '../Utils/Constants';
import Header from '../Components/Header';
import ProfileDrawer from '../Components/ProfileDrawer';

const HomeScreen = ({navigation}) => {
  // Sample data for different music sections
  const [musicSections] = useState([
    {
      title: 'Top Hits',
      data: [
        'Blinding Lights - The Weeknd',
        'Shape of You - Ed Sheeran',
        'Dance Monkey - Tones and I',
        'Watermelon Sugar - Harry Styles',
        'Levitating - Dua Lipa'
      ]
    },
    {
      title: 'Trending',
      data: [
        'As It Was - Harry Styles',
        'Circles - Post Malone',
        'Bad Guy - Billie Eilish',
        'Stay - The Kid LAROI & Justin Bieber',
        'Mood - 24kGoldn ft. Iann Dior'
      ]
    },
    {
      title: 'Classics',
      data: [
        'Bohemian Rhapsody - Queen',
        'Imagine - John Lennon',
        'Hotel California - Eagles',
        'Stairway to Heaven - Led Zeppelin',
        'Like a Rolling Stone - Bob Dylan'
      ]
    }
  ]);

  // State for drawer and tabs
  const [selectedTab, setSelectedTab] = useState('Music');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const tabs = ['All', 'Music', 'Podcast', 'Stories'];

  // Truncate text to fit within the music item
  const truncateText = (text, maxLength = 25) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  // Render individual music item
  const renderMusicItem = ({item}) => (
    <View style={{flex:1}}>
      <TouchableOpacity style={styles.musicItem}>
        {/* Optional: Add an image or icon here */}
      </TouchableOpacity>
      <Text 
        style={styles.musicItemText} 
        numberOfLines={1} 
        ellipsizeMode="tail"
      >
        {truncateText(item)}
      </Text>
    </View>
  );

  // Menu icon component (three horizontal lines)
  const MenuIcon = () => (
    <View style={styles.menuIcon}>
      <View style={styles.menuLine}></View>
      <View style={styles.menuLine}></View>
      <View style={styles.menuLine}></View>
    </View>
  );

  return (
    <View style={{flex:1}}>
      <Header 
        title="NarrativeNest" 
        leftIcon={<MenuIcon />}
        onLeftPress={() => setIsDrawerOpen(true)}
      />
      
      <ProfileDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
      
      <View style={styles.container}>
        {/* Top Navigation Tabs */}
        <View style={styles.tabContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity 
              key={tab}
              style={[
                styles.tab, 
                selectedTab === tab && styles.activeTab
              ]}
              onPress={() => setSelectedTab(tab)}
            >
              <Text 
                style={[
                  styles.tabText, 
                  selectedTab === tab && styles.activeTabText
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Music Sections FlatList */}
        <FlatList
          data={musicSections}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View>
              <Text style={styles.sectionTitle}>{item.title}</Text>
              <FlatList
                horizontal
                data={item.data}
                renderItem={renderMusicItem}
                keyExtractor={(subItem, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.horizontalListContainer}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CONST.SCREEN_BACKGROUND_COLOUR,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: CONST.SCREEN_BACKGROUND_COLOUR,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabText: {
    color: 'white',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#007AFF',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white',
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  horizontalListContainer: {
    paddingHorizontal: 10,
  },
  musicItem: {
    backgroundColor: '#191a25',
    width:150,
    height:100,
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  musicItemText: {
    color:'white',
    fontSize: 14,
    marginLeft:5,
    maxWidth: 150, // Ensure text doesn't overflow
  },
  menuIcon: {
    width: 24,
    height: 18,
    marginTop:18,
    justifyContent: 'space-between',
  },
  menuLine: {
    height: 3,
    backgroundColor: 'white',
    width: '100%',
  },
});

export default HomeScreen;