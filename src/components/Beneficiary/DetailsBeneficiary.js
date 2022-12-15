import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { api } from "../../api/api.js";
import DeleteBeneficiary from "./DeleteBeneficiary.js";
import EditBeneficiary from "./EditBeneficiary.js";

function BeneficiaryDetails({ beneficiaryForm, setBeneficiaryForm }) {
  const [beneficiary, setBeneficiary] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    try {
      const fetchBeneficiary = async () => {
        const response = await api.get(`/beneficiary/${id}`);
        setBeneficiary(response.data);
        setIsLoading(false);
      };

      fetchBeneficiary();
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
        <Link to={"/beneficiary"}>Voltar</Link>
      </Button>
      <Card className="mt-3">
        <Card.Header>
          <h5>Dados do Beneficiário</h5>
        </Card.Header>
        <Card.Body>
          <Card.Title>Nome</Card.Title>
          <Card.Text>{beneficiary.name}</Card.Text>

          <Card.Title>CPF</Card.Title>
          <Card.Text>{beneficiary.CPF}</Card.Text>

          <Card.Title>Plano de Saúde</Card.Title>
          <Card.Text>{beneficiary.healthPlan}</Card.Text>
        </Card.Body>
        <Row>
          <Col>
            <EditBeneficiary
              id={id}
              beneficiaryForm={beneficiaryForm}
              setBeneficiaryForm={setBeneficiaryForm}
            />
          </Col>
          <Col>
            <DeleteBeneficiary id={id} />
          </Col>
          <Row></Row>
        </Row>
      </Card>
    </Container>
  );
}

export default BeneficiaryDetails;
