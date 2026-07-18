import ObservationsList from "@/components/ObservationList";

/* Los tipos de variables en TypeScript incluyen:

string: Cadenas de texto.
number: Números, tanto enteros como decimales.
boolean: Valores de verdadero o falso.
null: Representa la ausencia de un valor.
undefined: Una variable que no ha sido asignada.
any: Permite cualquier tipo de valor.
void: Indica que no se devuelve ningún valor.
never: Representa valores que nunca ocurren.
Estos tipos te permiten escribir código más seguro y mantenible.*/

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;

  return (
    <div>
      <ObservationsList page={currentPage} perPage={20} />
    </div>
  );
}
