import React from "react";
import Layout from "../components/layout/Layout";
import Illustration from "/src/assets/ill.png"

const Home = () => {
  return (
    <Layout>
      <section className="firstscreen">
        <div className="col">
            <h1 className="firstscreen__title">Спорт.Тех - <br /> Будущее Спорта</h1>
            <h2 className="firstscreen__subtitle">Объединяя технологии и движение!</h2>
            <p className="firstScreen__description">Цифровая платформа для уличного спорта <br /> и физической культуры!</p>
        </div>
        <div className="firstscreen__img">
            <img src={Illustration} alt="" />
        </div>
      </section>
    </Layout>
  );
};

export default Home;