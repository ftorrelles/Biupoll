import React, { useEffect } from "react";
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
                                geometry: new Point(
                                    fromLonLat([-66.9036, 10.4806])
                                ),
                                name: "Venezuela",
                            }),
                            new Feature({
                                geometry: new Point(
                                    fromLonLat([-84.0907, 9.9281])
                                ),
                                name: "Costa Rica",
                            }),
                            new Feature({
                                geometry: new Point(
                                    fromLonLat([-74.2973, 4.5709])
                                ),
                                name: "Colombia",
                            }),
                            new Feature({
                                geometry: new Point(
                                    fromLonLat([-69.9422, 18.7357])
                                ),
                                name: "República Dominicana",
                            }),
                            new Feature({
                                geometry: new Point(
                                    fromLonLat([-66.5901, 18.2208])
                                ),
                                name: "Puerto Rico",
                            }),
                            new Feature({
                                geometry: new Point(
                                    fromLonLat([-102.5528, 23.6345])
                                ),
                                name: "México",
                            }),
                            new Feature({
                                geometry: new Point(
                                    fromLonLat([-90.2308, 15.7835])
                                ),
                                name: "Guatemala",
                            }),
                            new Feature({
                                geometry: new Point(
                                    fromLonLat([-88.8965, 13.7942])
                                ),
                                name: "El Salvador",
                            }),
                            new Feature({
                                geometry: new Point(
                                    fromLonLat([-85.2072, 12.8654])
                                ),
                                name: "Nicaragua",
                            }),
                            new Feature({
                                geometry: new Point(
                                    fromLonLat([-78.4678, -1.8312])
                                ),
                                name: "Ecuador",
                            }),
                            new Feature({
                                geometry: new Point(
                                    fromLonLat([-75.0152, -9.189967])
                                ),
                                name: "Perú",
                            }),
                            new Feature({
                                geometry: new Point(
                                    fromLonLat([-49.2488, -16.6809])
                                ),
                                name: "Brasil",
                            }),
                            new Feature({
                                geometry: new Point(
                                    fromLonLat([-64.6854, -16.2902])
                                ),
                                name: "Bolivia",
                            }),
                            new Feature({
                                geometry: new Point(
                                    fromLonLat([-63.6167, -38.4161])
                                ),
                                name: "Argentina",
                            }),
                            new Feature({
                                geometry: new Point(
                                    fromLonLat([-87.2043, 14.081])
                                ),
                                name: "Honduras",
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
                <Row xs={1} md={2} lg={2}>
                    <Col className="div_info_about" lg={8}>
                        <h3>Presencia en 15 paises</h3>
                        <p>
                            Brindamos cobertura en Venezuela, Costa Rica,
                            Colombia, Republica Dominicana, Puerto Rico, Mexico,
                            Guatemala, Honduras, Salvador, Nicaragua, Ecuador,
                            Peru, Brasil, Bolivia y Argentina
                        </p>
                    </Col>
                    <Col
                        style={{
                            backgroundColor: "#256edc",
                            padding: "10px",
                            borderRadius: "10px",
                            position: "relative",
                            height: "70vh",
                        }}
                        lg={4}
                    >
                        <div
                            id="map"
                            className="child-container"
                            style={{
                                position: "absolute",
                                width: "95%",
                                height: "95%",
                            }}
                        ></div>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default ServicesMap;
