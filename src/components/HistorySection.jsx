import React from "react";
import { Heart } from "lucide-react";

export default function HistorySection() {
  return (
    <section className="w-full text-center">
      <div className="flex items-center justify-center mb-8">
        <Heart
          fill="currentColor"
          className="w-6 h-6 text-brand-primary-dark animate-pulse fill-current"
        />
        <h2 className="text-2xl font-bold mx-2">Una historia de amor</h2>
        <Heart
          fill="currentColor"
          className="w-6 h-6 text-brand-primary-dark animate-pulse fill-current"
        />
      </div>
      <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed text-center">
        <p>
          Todo comenzó en 2017 cuando Klaus, el perrete de uno de nuestros
          fundadores, comenzó a sufrir ataques de epilepsia que afectaron
          gravemente su salud. A pesar de medicarlo, no se veían mejoras
          significativas en su condición. Desesperados por encontrar una
          solución, decidieron explorar diferentes tipos de alimentos para
          reforzar su bienestar. Después de varias visitas al veterinario, se
          dieron cuenta de que los alimentos comerciales no estaban brindando
          los resultados deseados, así que tomaron la valiente decisión de
          preparar la comida de Klaus en casa, bajo la guía de una nutricionista
          canina.
        </p>
        <p>
          Cocinar con ingredientes naturales y frescos se convirtió en su
          misión. Tres años pasaron desde aquel diagnóstico de Klaus, y los
          resultados fueron sorprendentes y así fue como nació{" "}
          <span className="font-bold text-brand-primary-dark">Dogfy Diet</span>.
        </p>
        <div className="my-8 flex justify-center">
          <img
            src="/assets/illustrations/caja-dogfy.png"
            alt="Caja Dogfy Diet"
            className="w-64 h-auto"
          />
        </div>
        <p>
          Nos propusimos ofrecer alimentos reales y nutritivos para todas las
          mascotas. Nuestro objetivo es proporcionar una alimentación balanceada
          que mejorara la calidad de vida de los perros. El éxito no se hizo
          esperar: en 2021, Dogfy Diet inauguró su primera oficina en Barcelona.
        </p>
        <p>
          Sergi y Gonzalo, dos apasionados de los perritos, comenzaron
          cocinando, pesando, envasando y empaquetando el alimento que
          posteriormente sería enviado a nuestros clientes. Hoy en día, Dogfy
          Diet es reconocida como una empresa líder en el mercado de alimentos
          para perros. Nuestro compromiso con la salud y el bienestar animal
          sigue siendo el pilar fundamental de nuestra filosofía.
        </p>
        <p>
          Seguimos innovando y creando nuevas recetas que satisfacen las
          necesidades nutricionales de cada perro, brindando a los dueños la
          tranquilidad de que sus mascotas estén recibiendo una alimentación de
          calidad.
        </p>
        <p>
          Dogfy Diet es mucho más que una empresa de alimentos para perros; es
          el resultado de una historia de amor y dedicación hacia los animales.
          Su legado perdurará en cada perro que disfrute de sus deliciosas y
          saludables comidas, creando una vida más larga y feliz para nuestras
          queridas mascotas.
        </p>
      </div>
    </section>
  );
}
