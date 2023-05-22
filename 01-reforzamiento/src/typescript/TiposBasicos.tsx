export const TiposBasicos = () => {

    let nombre: string | number = 'Diego';
    const edad: number = 37;
    const estaActivo: boolean = true;
    const poderes: string[] = ['Velocidad', 'Volar', 'Teletransportación'];
    
    return (
        <>
            <h3>TiposBasicos</h3>
            { nombre }, { edad }, {{ estaActivo } ? 'Activo' : 'No activo'}
            <br />
            { poderes.join(', ') }
        </>
    )
}
