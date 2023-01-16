import React from "react";

import { Box, Button } from "../UI";
import { extratoLista } from "../../info";
import Items from "../Items";

const Statement = () => {
    return(
        <Box>
            {
                extratoLista.updates.map(
                    extrato => <Items 
                        key={extrato.id}
                        type={extrato.type}
                        from={extrato.from}
                        value={extrato.value}
                        date={extrato.date}
                    />
                )
            }
            <Button>Ver Mais</Button>
        </Box>
    );
}

export default Statement;