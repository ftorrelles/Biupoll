import { useEffect } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import { Style, Fill, Circle } from "ol/style";
import { Col, Row } from "react-bootstrap";

function ServicesMap() {
  useEffect(() => {
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [
              new Feature({
                geometry: new Point(fromLonLat([-66.9036, 10.4806])),
                name: "Venezuela",
              }),
              new Feature({
                geometry: new Point(fromLonLat([-84.0907, 9.9281])),
                name: "Costa Rica",
              }),
              new Feature({
                geometry: new Point(fromLonLat([-74.2973, 4.5709])),
                name: "Colombia",
              }),
              new Feature({
                geometry: new Point(fromLonLat([-69.9422, 18.7357])),
                name: "República Dominicana",
              }),
              new Feature({
                geometry: new Point(fromLonLat([-66.5901, 18.2208])),
                name: "Puerto Rico",
              }),
              new Feature({
                geometry: new Point(fromLonLat([-102.5528, 23.6345])),
                name: "México",
              }),
              new Feature({
                geometry: new Point(fromLonLat([-90.2308, 15.7835])),
                name: "Guatemala",
              }),
              new Feature({
                geometry: new Point(fromLonLat([-88.8965, 13.7942])),
                name: "El Salvador",
              }),
              new Feature({
                geometry: new Point(fromLonLat([-85.2072, 12.8654])),
                name: "Nicaragua",
              }),
              new Feature({
                geometry: new Point(fromLonLat([-78.4678, -1.8312])),
                name: "Ecuador",
              }),
              new Feature({
                geometry: new Point(fromLonLat([-75.0152, -9.189967])),
                name: "Perú",
              }),
              new Feature({
                geometry: new Point(fromLonLat([-49.2488, -16.6809])),
                name: "Brasil",
              }),
              new Feature({
                geometry: new Point(fromLonLat([-64.6854, -16.2902])),
                name: "Bolivia",
              }),
              new Feature({
                geometry: new Point(fromLonLat([-63.6167, -38.4161])),
                name: "Argentina",
              }),
              new Feature({
                geometry: new Point(fromLonLat([-87.2043, 14.081])),
                name: "Honduras",
              }),
              new Feature({
                geometry: new Point(fromLonLat([-71.5375, -35.6751])),
                name: "Chile",
              }),
              new Feature({
                geometry: new Point(fromLonLat([-79.5347, 9.081999])),
                name: "Panamá",
              }),
              new Feature({
                geometry: new Point(fromLonLat([-58.4438, -23.442503])),
                name: "Paraguay",
              }),
              new Feature({
                geometry: new Point(fromLonLat([-55.7658, -32.5228])),
                name: "Uruguay",
              }),
            ],
          }),
          style: new Style({
            image: new Circle({
              fill: new Fill({
                color: "#1c4c96",
              }),
              radius: 8,
            }),
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([-100, 40]),
        zoom: 3,
      }),
    });

    return () => {
      map.dispose();
    };
  }, []);

  return (
    <>
      <section className="map">
        <h2
          style={{
            textAlign: "center",
            paddingBottom: "3rem",
            paddingTop: "3rem",
          }}
        >
          Cobertura Internacional
        </h2>
        <h3
          style={{
            textAlign: "center",
          }}
        >
          Presencia en 19 paises
        </h3>
        <p>
          <strong> Brindamos cobertura en</strong>
        </p>
        <Row xs={1} md={2} lg={2}>
          <Col className="div_info_map" lg={6}>
            {/* <p>
              <strong>
                Colombia, Venezuela, Costa Rica, Republica Dominicana, Puerto
                Rico, Mexico, Guatemala, Honduras, Salvador, Nicaragua, Ecuador,
                Peru, Brasil, Bolivia y Argentina
              </strong>
            </p> */}

            <div>
              <ul>
                <li>Argentina</li>
                <li>Bolivia</li>
                <li>Brasil</li>
                <li>Colombia</li>
                <li>Costa Rica</li>
                <li>Ecuador</li>
                <li>El Salvador</li>
                <li>Guatemala</li>
                <li>Honduras</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>México</li>
                <li>Nicaragua</li>
                <li>Panamá</li>
                <li>Paraguay</li>
                <li>Perú</li>
                <li>Puerto Rico</li>
                <li>República Dominicana</li>
                <li>Uruguay</li>
                <li>Venezuela</li>
              </ul>
            </div>
          </Col>
          <Col
            style={{
              position: "relative",
              height: "50vh",
              boxShadow: " 0 8px 16px 0 rgba(0, 0, 0, 0.2)",
            }}
            lg={6}
          >
            <div
              id="map"
              className="child-container"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            ></div>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default ServicesMap;
