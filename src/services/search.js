// export const getSearchTMDB = async (searchType, query) => {
//   try {
//     const data = await api.get(`https://api.themoviedb.org/3/search/${searchType}`, {
//       params: {
//         query,
//       },
//     });
//     return data.data.results;
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// }

//   export const getSearchJikan = async (name) => {
//     try {
//       console.count('Jikan request')
//       console.log("Query:", name);
//       const data = await axios.get("https://api.jikan.moe/v4/anime", {
//         params: {
//           q: name,
//         }
//       });
//       return data;
//     } catch (err) {
//       console.error(err);
//       console.log(err.message)
//       throw err;
//     }
//   }