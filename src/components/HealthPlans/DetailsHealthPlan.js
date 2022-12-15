import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { api } from "../../api/api.js";
import DeleteHealthPlan from "./DeleteHealthPlan.js";
import EditHealthPlan from "./EditHealthPlan.js";

function HealthPlanDetails({ healthPlanForm, setHealthPlanForm }) {
  const [healthPlan, setHealthPlan] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    try {
      const fetchHealthPlan = async () => {
        const response = await api.get(`/health-plan/${id}`);
        setHealthPlan(response.data);
        setIsLoading(false);
      };

      fetchHealthPlan();
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
        <Link to={"/health-plan"}>Voltar</Link>
      </Button>
      <Card className="mt-3">
        <Card.Header>
          <h5>Dados do Plano de Saúde</h5>
        </Card.Header>
        <Card.Body>
          <Card.Title>Nome</Card.Title>
          <Card.Text>{healthPlan.name}</Card.Text>

          <Card.Title>CNPJ</Card.Title>
          <Card.Text>{healthPlan.CNPJ}</Card.Text>
        </Card.Body>
        <Row>
          <Col>
            <EditHealthPlan
              id={id}
              healthPlanForm={healthPlanForm}
              setHealthPlanForm={setHealthPlanForm}
            />
          </Col>
          <Col>
            <DeleteHealthPlan id={id} />
          </Col>
          <Row></Row>
        </Row>
      </Card>
    </Container>
  );
}

export default HealthPlanDetails;
