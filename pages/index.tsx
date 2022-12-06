export default function Home() {
  fetch('http://localhost:3333/pools/count')
    .then((resp) => resp.json())
    .then((data) => console.log(data));
  return <h1>Hello World</h1>;
}
