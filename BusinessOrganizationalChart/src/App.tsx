import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import ICollaborator from "./interfaces/ICollaborator";

function App() {

  const [collaborators, setCollaborators] = useState<ICollaborator[]>([]);

  const addCollaborators = (collaborator: ICollaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  return <>
    <div className="App">
      <Banner />
      <Form submit={addCollaborators} />
    </div>
  </>
}

export default App;
