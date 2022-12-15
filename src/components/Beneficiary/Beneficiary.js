import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { api } from "../../api/api.js";
import { useParams } from "react-router-dom";

function Beneficiary({ beneficiaryForm, setBeneficiaryForm }) {
  const [beneficiary, setBeneficiary] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      const fetchBeneficiary = async () => {
        const response = await api.get("/beneficiary");
        setBeneficiary(response.data);
        setIsLoading(false);
      };
      fetchBeneficiary();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const renderBeneficiary = beneficiary
    .filter((beneficiary) =>
      beneficiary.name.toLowerCase().includes(search.toLowerCase())
    )
    .map((beneficiary) => {
      return (
        <tr key={beneficiary._id}>
          <td>{beneficiary.name}</td>
          <td>
            <Button variant="primary" style={{ margin: "5px" }}>
              <Link className="nav-link" to={`/beneficiary/${beneficiary._id}`}>
                Ver Detalhes
              </Link>
            </Button>
          </td>
        </tr>
      );
    });

  return (
    <Container>
      <Button variant="success" size="lg" style={{ margin: "15px" }}>
        <Link className="nav-link" to={"/beneficiary/create"}>
          Adicionar Novo Beneficiário
        </Link>
      </Button>
      <Table className="mt-4" striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Detalhar</th>
          </tr>
        </thead>
        <tbody>{renderBeneficiary}</tbody>
      </Table>
    </Container>
  );
}

export default Beneficiary;
