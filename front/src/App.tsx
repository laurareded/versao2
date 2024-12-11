import React from "react";
import ListarTarefas from "./components/ListarTarefas";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ListarTarefasConcluidas from "./components/ListarTarefasConcluidas";
import ListarTarefasNaoConcluidas from "./components/ListarTarefasNaoConcluidas";
import CadastrarTarefa from "./components/CadastrarTarefa";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/listar"}>
                  Listar Tarefas{" "}
                </Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/listarconcluidas"}>
                  Listar Tarefas Concluídas{" "}
                </Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/listarnaoconcluidas"}>
                  Listar Tarefas Não Concluídas{" "}
                </Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/cadastrar"}>
                  Cadastrar Tarefa{" "}
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<ListarTarefas />} />
            <Route
              path="/pages/tarefa/listar"
              element={<ListarTarefas />}
            />
            <Route
              path="/pages/tarefa/listarconcluidas"
              element={<ListarTarefasConcluidas />}
            />
            <Route
              path="/pages/tarefa/listarnaoconcluidas"
              element={<ListarTarefasNaoConcluidas />}
            />
            <Route
              path="/pages/tarefa/cadastrar"
              element={<CadastrarTarefa />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
