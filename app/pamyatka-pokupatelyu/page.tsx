"use client";

import React from "react";
import "./styles.css";

import { motion } from "motion/react";
import NavBread from "../components/NavBread/NavBread";
import { motionConfig } from "@/lib/utils";

function PamyatkPokupatelyu() {
  return (
    <div>
      <div className="wrapper "></div>
      <div className="main-container">
        {/* Навигационная панель */}
        <NavBread name="Памятка покупателю" />
        <div className="dark-green-text text-pamyatka mt-30">
          <motion.h1
            {...motionConfig.slideInWithStep(0)}
            className="mb-10 fw-700 fs-h1"
          >
            ПАМЯТКА ПОКУПАТЕЛЮ
          </motion.h1>
          <motion.h1
            {...motionConfig.slideInWithStep(0.2)}
            className="mb-10 fw-700 fs-h1"
          >
            ПО УХОДУ ЗА ШВЕЙНЫМИ ИЗДЕЛИЯМИ
          </motion.h1>
          <motion.h1
            {...motionConfig.slideInWithStep(0.4)}
            className="mb-15 fw-700 fs-h1"
          >
            ИЗ ЧИСТОЛЬНЯНЫХ И ПОЛУЛЬНЯНЫХ ТКАНЕЙ
          </motion.h1>

          <div className="fs-text">
            <motion.div {...motionConfig.fadeIn}>
              Уважаемый покупатель!
              <br />
              <br />
              Чтобы приобретенное изделие приносило радость и служило долго,
              следуйте нашим рекомендациям.
              <br />
              <br />
              Помните, что волокна, нити и ткани создаются с помощью различных
              технологий, а также подвергаются разного рода обработкам. Поэтому
              ухаживайте за изделиями в соответствии с символами по уходу,
              указанными на ярлыке, а так же придерживайтесь следующих простых
              правил:
              <br />
              <br />
              <li>
                1. Перед стиркой молнии и пуговицы в изделиях обязательно должны
                быть застегнуты.
              </li>
              <li>
                2. Барабан стиральной машины следует заполнять примерно
                наполовину. Это обеспечит эффективную, бережную стирку, легкое
                полоскание и отжим.
              </li>
              <li>
                3. Машинную стирку изделий из цветных полотен контрастных цветов
                или с контрастной отделкой следует производить в теплой воде (не
                выше 40 градусов) с использованием моющих средств для цветных
                тканей, не содержащих отбеливающих веществ.
              </li>
              <li>
                4. Не желательно для стирки использовать средства с биодобавками
                (энзимами), так как они могут деформировать нить и привести к
                расползанию ткани на швах.
              </li>
              <li>
                5. Изделия из цветных полотен контрастных цветов или с
                контрастной отделкой запрещается замачивать и кипятить, а также
                оставлять мокрыми в сложенном виде.
              </li>
              <li>
                6. Изделия с вышивкой, кружевом, набивным рисунком,
                гладкокрашеные и «с эффектом мятости» следует подвергать стирке
                и глажению с изнаночной стороны, чтобы не повредить декоративные
                элементы, нанесенный рисунок и цвет изделия.
              </li>
              <li>
                7. При стирке изделий «с эффектом мятости» необходимо
                использовать кондиционер для белья.
              </li>
              <li>
                8. При замачивании и стирке стиральный порошок необходимо
                разводить в воде, а не наносить непосредственно на изделие.
              </li>
              <li>
                9. Изделия из цветных полотен следует стирать отдельно от
                изделий белого цвета.
              </li>
              <li>
                10. Разрешается отжим в стиральной машине. Рекомендуемая
                скорость отжима 400-600 оборотов в минуту.
              </li>
              <li>
                11. Не желательно сушить изделия из цветных полотен на солнце,
                так как цвет изделия может измениться (выгореть).
              </li>
              <li>
                12. Гладить льняные изделия при максимальной температуре 150
                градусов с увлажнителем.
              </li>
              <li>
                13. Запрещается глажка постельного белья с молниями через
                утюжильный вал.
              </li>
              <li>
                14. Запрещается контакт льняных изделий с химически-активными
                веществами в бытовых условиях.
              </li>
            </motion.div>
            <br />
            <motion.div {...motionConfig.fadeIn}>
              <div className="fw-700 fs-h1-name">
                <i>
                  <u>Специальные предупреждения:</u>
                </i>
              </div>
              <br />
              <li>
                1. При эксплуатации и стирке изделий из цветных полотен
                насыщенных цветов допускается переход цвета на соприкасающиеся
                поверхности, а также некоторое изменение цвета.
              </li>
              <li>
                2. Льняные изделия после стирки могут дать усадку, в нормируемых
                пределах.
              </li>
              <li>
                3. При эксплуатации льняных изделий допускается образование пуха
                и пиллинга, т.к. изделия производятся из натуральных волокон.
              </li>
              <li>
                4. В изделиях с применением регенерированного волокна
                допускается вкрапление цветных волокон по всему фону.
              </li>
            </motion.div>
            <br />
            <motion.div {...motionConfig.fadeIn}>
              <div>
                <b>При несоблюдении наших рекомендаций, а также при:</b>
              </div>
              <br />
              <li>
                <b>— небрежном использовании;</b>
              </li>
              <li>
                <b>— самостоятельном ремонте;</b>
              </li>
              <li>
                <b>
                  — механическом воздействии, на которое изделие не рассчитано;
                </b>
              </li>
              <li>
                <b>
                  — воздействии химически-активных веществ в бытовых условиях;
                </b>
              </li>
              <li>
                <b>
                  — нарушении правил химчистки (как лично, так и
                  специализированными организациями);
                </b>
              </li>
              <li>
                <b>
                  — воздействии других внешних причин, которые не подлежат
                  контролю со стороны производителя
                </b>
              </li>
              <br />
              <div>
                <b>ПРЕТЕНЗИИ ПО КАЧЕСТВУ ПРИНИМАТЬСЯ НЕ БУДУТ!!!</b>
              </div>
            </motion.div>
            <br />
            <br />

            <motion.h1
              {...motionConfig.fadeIn}
              className="mt-30 mb-15 fw-700 fs-h1"
            >
              Бактерицидные, антигрибковые и гипоаллергенные свойства льняной
              продукции.
            </motion.h1>
            <div>
              <motion.div {...motionConfig.fadeIn}>
                Искусство прядения нитей из льна известно не одну тысячу лет, и
                до сих пор льняные ткани не теряют своей актуальности в быту,
                моде, на производстве. Уникальные свойства льняных волокон
                делают ткани из них не только приятными и долговечными, но и
                полезными для здоровья.
                <br />
                <br />
                Волокна льна имеют бактерицидные свойства. Это значит, что
                болезнетворная микрофлора погибает при соприкосновении с
                льняными тканями. Кремнезем (диоксид кремния), содержащийся в
                льне, подавляет рост бактерий, вызывающих брожение и гниение.
                Регулярный сон на льняном белье или ношение одежды из льна
                ускоряет заживление ранок, солнечных ожогов, а раны в льняных
                бинтах затягиваются быстрее. Лен можно гладить горячим утюгом и
                кипятить, что позволяет обеспечить ткани максимальную
                стерилизацию.
                <br />
                <br />
                Антигрибковые свойства льна помогают ему лечить грибковые
                заболевания. Кухонные льняные полотенца по этой причине не
                становятся “бактериальной бомбой”. Аналогичный эффект получает
                все ваше тело во время сна на постельном белье из льна.
              </motion.div>
              <br />
              <br />
              <motion.div {...motionConfig.fadeIn}>
                Неокрашенные льняные ткани гипоаллергенны. Известны случаи
                аллергии на синтетические ткани, шерсть, шелк, а на лен ― не
                зафиксированы. Кроме того, при выращивании лен намного меньше
                обрабатывается химическими веществами, чем хлопок. Высокая
                прочность льняных волокон не требует от производителей
                использовать улучшители ткани, наносить на нее защиту от усадки.
                Совет аллергикам и астматикам ― выбирайте льняные ткани, которые
                легко мнутся и трудно гладятся ― они не имеют химической
                обработки от сминания.
                <br />
                <br />
                Являясь натуральным материалом, льняная ткань отлично «дышит»,
                т.е. пропускает воздух, пар. Лен обеспечивает оптимальную
                вентиляцию кожи, помогает нам регулировать тепло ― при
                соприкосновении с кожей зимой согревает, летом отводит тепло,
                снижая температуру тела. Гигроскопичность, или способность
                впитывать и испарять влагу, у льна выше, чем у хлопка (12 и 8%
                соответственно). Это качество важно не только для нашей летней
                одежды, но и для постельного белья и кухонных полотенец в любое
                время года.
                <br />
                <br />
                Лен не электризуется. Значит, ваша прическа всегда будет
                выглядеть аккуратно, если вы носите льняные рубашки или спите на
                наволочках из льна ― больше никаких «одуванчиков» на голове
                поутру или лишенных объема, «прилипших» волос. Кроме того,
                минимальная электризуемость обеспечивает чистоту ткани: она
                меньше и медленнее пачкается, не собирает на себе волокна
                другого цвета и пыль.
              </motion.div>
            </div>
            <br />
            <br />
            <motion.h1
              {...motionConfig.fadeIn}
              className="mt-30 mb-15 fw-700 fs-h1"
            >
              Как использовать полезные свойства льна по максимуму?
            </motion.h1>
            <div className="mb-30">
              <motion.div {...motionConfig.fadeIn}>
                Носить льняную одежду. В летнюю жару льняные платья и рубашки ―
                настоящая находка. Лен хорошо отводит влагу и тепло, поэтому по
                ощущениям температура тела в льняной одежде ниже на 4–5 °С, чем
                в хлопковой. Белый лен защищает тело от УФ-излучения и всего
                спектра солнечных лучей, защищая тело от увядания и ранней
                старости.
                <br />
                <br />
                Спать на постельном белье из льна. Если у вас проблемная кожа,
                дерматологические заболевания или вы просто пересидели на
                солнце, простыни, наволочки и пододеяльник из небеленого льна
                облегчат зуд, помогут снять раздражение кожи, пока вы спите.
                Льняные простыни рекомендуют использовать пролежневым больным,
                так как лен обеспечивает необходимую им вентиляцию, заживление
                пролежней, увеличивают рост свежего эпителия.
                <br />
                <br />
              </motion.div>
              <motion.div {...motionConfig.fadeIn}>
                Вешать льняные занавески. Помимо экологической чистоты интерьера
                занавески из небеленого льна помогут создать в доме стильный
                декор, будут мягко рассеивать свет, не будут электризоваться. Вы
                ощутите на себе бактерицидные свойства льняных тканей, даже если
                повесите их в виде портьер в спальне, детской, на кухне для
                поддержания благоприятной микрофлоры. Шторы из льна станут вашим
                «натуральным кондиционером» ― зимой помогут удерживать тепло,
                летом защитят от уличной жары. Портьеры будут легко стираться и
                потребуют замены не раньше, чем через несколько десятков лет.
                <br />
                <br />
                Включите изделия из льна в свой гардероб, поселите их в своей
                спальне, и вы не пожалеете о своем выборе. Ведь нет ничего
                дороже вашего отличного самочувствия и здоровья ваших родных.
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PamyatkPokupatelyu;
