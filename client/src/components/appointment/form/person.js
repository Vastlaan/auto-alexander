import React from "react";
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { FormColumn, ButtonEmpty } from "../../../styles";

export default function PersonComponent({ name, setName, email, setEmail,setIsChecked, warning }) {
    return (
        <FormColumn>
            <h3>04. Jouw gegevens</h3>
            <Field>
                <label htmlFor="name">Naam:</label>
                <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    placeholder="naam"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
            </Field>
            <Field>
                <label htmlFor="email">E-mail:</label>
                <input
                    required
                    type="text"
                    id="email"
                    name="email"
                    placeholder="e-mail"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </Field>
            <Field2>
                <input
                    type="checkbox"
                    id="policy"
                    name="policy"
                    onChange={()=>setIsChecked(prevState=>!prevState)}
                />
                <label htmlFor="policy">
                    Ik verklaar dat ik mee ben met{" "}
                    <Link to="/voorwaarden">
                        Algemene Voorwaarden
                    </Link>{" "}
                    en{" "}
                    <Link to="/cookies"> Cookies Policy</Link>
                </label>
            </Field2>
            <Buttons>
            {warning && <Warning>
                              {warning}
                            </Warning>}
            <ButtonEmpty color="#F0F4FD" color2="#284B63" type="submit">Versturen</ButtonEmpty>
            </Buttons>
        </FormColumn>
    );
}

const Field = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.9rem 0 0 0;

    label {
        color: ${(p) => p.theme.white};
        font-size: 1.9rem;
    }
    input,
    textarea {
        border: 1px solid ${(p) => p.theme.white};
        padding: 0.9rem 1.9rem;
        border-radius: 3px;
        max-width: 35rem;

        &:focus,
        :active {
            outline: none;
            box-shadow: 0 0 1rem rgba(255, 255, 255, 0.6);
        }
    }
    button {
        align-self: flex-start;
    }
`;
const Field2 = styled.div`
    display: flex;
    align-items: center;
    margin: 1.9rem 0;

    label {
        color: ${(p) => p.theme.silver};
        font-size: 1.3rem;

        a {
            color: ${(p) => p.theme.white};
            text-decoration: underline;
        }
    }
    input {
        border: 1px solid ${(p) => p.theme.white};
        padding: 0.9rem 1.9rem;
        border-radius: 3px;
        margin-right: 1.9rem;
        max-widht: 35rem;

        &:focus,
        :active {
            outline: none;
            box-shadow: 0 0 1rem rgba(255, 255, 255, 0.6);
        }
    }
`;
const Buttons = styled.div`
  margin-top: 1.9rem;
`

const Warning = styled.div`
  margin: 1.9rem 0 ;
  font-size: 1.6rem;
  color: orangered;
`