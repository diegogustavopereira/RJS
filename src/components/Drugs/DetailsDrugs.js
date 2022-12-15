import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { api } from "../../api/api.js";
import DeleteDrug from "./DeleteDrug.js";
import EditDrug from "./EditDrug.js";
import editDrug from "./EditDrug.js";

function DrugDetails({ drugForm, setDrugForm }) {
  const [drug, setDrug] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    try {
      const fetchDrug = async () => {
        const response = await api.get(`/drug/${id}`);
        setDrug(response.data);
        setIsLoading(false);
      };

      fetchDrug();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <Container>
      <Button
        className="mt-4"
        variant="info"
        type="submit"
        size="sm"
        style={{ margin: "5px" }}
      >
        <Link to={"/drug"}>Voltar</Link>
      </Button>
      <Card className="mt-3">
        <Card.Header>
          <h5>Dados do Medicamento</h5>
        </Card.Header>
        <Card.Body>
          <Card.Title>Nome</Card.Title>
          <Card.Text>{drug.name}</Card.Text>

          <Card.Title>CID</Card.Title>
          <Card.Text>{drug.CID}</Card.Text>
        </Card.Body>
        <Row>
          <Col>
            <EditDrug id={id} drugForm={drugForm} setDrugForm={setDrugForm} />
          </Col>
          <Col>
            <DeleteDrug id={id} />
          </Col>
          <Row></Row>
        </Row>
      </Card>
    </Container>
  );
}

export default DrugDetails;
