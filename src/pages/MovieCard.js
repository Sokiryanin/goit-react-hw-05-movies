const { useParams, Outlet } = require('react-router-dom');

export const MovieCard = () => {
  const { movieId } = useParams();
  return (
    <main>
      <div>
        <img src="" alt="" />
        <h2>Title {movieId}</h2>
        <p>User score: 100%</p>
        <h3>Overview</h3>
        <p>description</p>
        <h3>Genres</h3>
        <p>type of genres</p>
      </div>
      <Outlet />
    </main>
  );
};

// import { Link, Outlet, useParams } from 'react-router-dom';

// const DogDetails = () => {
//   const { dogId } = useParams();

//   // useEffect(() => {
//   // HTTP запрос, если нужно
//   // }, [])

//   return (
//     <>
//       <h1>DogDetails: {dogId}</h1>
//       <ul>
//         <li>
//           <Link to="subbreeds">Подподроды</Link>
//         </li>
//         <li>
//           <Link to="gallery">Галерея</Link>
//         </li>
//       </ul>
//       <Outlet />
//     </>
//   );
// };

// export default DogDetails;
