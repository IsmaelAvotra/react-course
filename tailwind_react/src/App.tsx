import Card from "./components/Card";
import Connection from "./components/Connection";
import Form from "./components/Form";
import Navigation from "./components/Navigation";
import People from "./components/People";

const App = () => {
  return (
    <div className="m-8">
      <h2 className="text-2xl text-gray-100 font-semibold mb-4 ">
        React with Tailwind CSS
      </h2>
      <People />
      <Connection />
      <Form />
      <Navigation />
      <Card />
    </div>
  );
};

export default App;
