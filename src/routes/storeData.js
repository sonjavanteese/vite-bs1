import {supabase} from '../lib/data';
import { writable } from 'svelte/store';
// pageType,imgUrl,storyText,choice1,choice2,choice1Text,choice2Text,pageTitel,videoUrl,audioUrl,daten,op1,page
export const gameData = async (filter = { asc: true }) => {
    let filterSets = filter
    let query = supabase.from('game_story').select('*');
    if (filterSets && filterSets.id) {
      query = query.eq('page', filterSets.id)
    }
     query = query.order('page', { ascending: filterSets.asc ? filterSets.asc : false })
  
    let { data, error } = await query
    if (data) {
      return data
    } else {
      throw new Error(error, data)
    }
}
function gameDataList() {
	const {subscribe, set, update} = writable([]);
	return {
		subscribe,
		fetchAll: (f) => {
			const fetchData = gameData(f);
			set(fetchData);
		}
	}
}
export const _pages = gameDataList(); 
export const _currentPage = writable(0); 

//   const getData = async () => {
//     try {
//       const { data, error } = await supabase.from("game_story").select("*");
//       if (error) throw error;
//       if (data) {
//         daten = data;
//         console.log("getData", daten);
//       }
//     } catch (error) {
//       alert(error);
//     }
//   };
