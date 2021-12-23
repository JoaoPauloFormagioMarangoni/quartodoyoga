import { AllNews } from "../../components/AllNews";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LatestNews } from "../../components/LatestNews";
import { Container } from "./styles";

export default function Blog() {
    return (
        <Container>
            <Header />
            <LatestNews />
            <AllNews />
            <Footer />
        </Container>
    );
}