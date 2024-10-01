import { useEffect, useState } from "react";

// type User = {
//   id: number;
//   name: string;
// }

// https://random-word-api.herokuapp.com/word?number=10
// https://jsonplaceholder.typicode.com/users


function ApiFetcher() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://random-word-api.herokuapp.com/word?number=10');
      const data = await response.json();
      setWords(data);
    }
    fetchData();
    
    // mesma coisa que o código acima
    // fetch('https://random-word-api.herokuapp.com/word?number=10')
    //   .then(response => response.json())
    //   .then(data => setWords(data));
  }, []); // Executa o efeito apenas na primeira renderização

  return (
    <div>
      <h1>Lista</h1>
      <ul>
        {/* {words.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))} */}
        {words.map((word: string, index: number) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
}

export default ApiFetcher;