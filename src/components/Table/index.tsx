import { movies } from "../Movies"

type Props = {
    movies: {
        id: number;
        nome: string;
        genero: string;
        imagem: string;
    }[];
};

export function Table({ movies }: Props) {
    return (
        <table>
            <thead>
                <tr>
                    <tr>Id</tr>
                    <th>Imagem</th>
                    <th>Nome</th>
                    <th>Genero</th>
                </tr>
            </thead>

            <tbody>
                {movies.map((movies) => (
                    <tr key={movies.id}>
                        <td>{movies.id}</td>
                        <td>
                            <img src={movies.imagem} alt={movies.nome} width={60} />
                        </td>
                        <td>{movies.nome}</td>
                        <td>{movies.genero}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}