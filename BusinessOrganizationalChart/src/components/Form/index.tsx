import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import InputList from "../InputList";
import "./form.css";
import ICollaborator from "../../interfaces/ICollaborator";

interface IPropForm {
  submit: (collaborator: ICollaborator) => void;
}

const Form = ({ submit }: IPropForm) => {

  const _listTeam: string[] = [
    "Programação",
    "Front-end",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
  ];

  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    submit({
      name,
      office,
      image,
      team
    });
  };

  return <>
    <section className="form_collaborator">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Input
          label="Nome"
          value={name}
          setValue={setName}
          required={true}
          placeholder="Digite o seu nome"
        />
        <Input
          label="Cargo"
          value={office}
          setValue={setOffice}
          required={true}
          placeholder="Digite o seu cargo"
        />
        <Input
          label="Imagem"
          value={image}
          setValue={setImage}
          required={true}
          placeholder="Digite o endereço da imagem"
        />
        <InputList
          label="Time"
          itens={_listTeam}
          value={team}
          setValue={setTeam}
        />
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  </>
};

export default Form;