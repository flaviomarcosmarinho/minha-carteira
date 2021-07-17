import React from "react";
// import {
//     PieChart,
//     Pie,
//     Cell,
//     ResponsiveContainer
// } from 'recharts'; //yarn add recharts (by www.recharts.org) && yarn add @types/recharts -D

import { 
    Container,
    SideLeft,
    LegendContainer,
    Legend,
    SideRight
 } from "./styles";

//stateless component
const PieChart: React.FC = () => (
    <Container>
        <SideLeft>
            <h2>Relação</h2>
            <LegendContainer>
                <Legend color="#F7931B">
                    <div>5%</div>
                    <span>Entradas</span>
                </Legend>
                <Legend color="#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
                <Legend color="#F7931B">
                    <div>5%</div>
                    <span>Entradas</span>
                </Legend>
                <Legend color="#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
                <Legend color="#F7931B">
                    <div>5%</div>
                    <span>Entradas</span>
                </Legend>
                <Legend color="#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
                <Legend color="#F7931B">
                    <div>5%</div>
                    <span>Entradas</span>
                </Legend>
                <Legend color="#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
                <Legend color="#F7931B">
                    <div>5%</div>
                    <span>Entradas</span>
                </Legend>
                <Legend color="#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
            </LegendContainer>            
        </SideLeft>

        <SideRight>
            {/* <ResponsiveContainer>
                <PieChart>
                    <Pie 
                        data={[{amount: 30, percent: 95}]}
                        labelLine={false}
                        dataKey="percent"
                    >

                    </Pie>
                </PieChart>
            </ResponsiveContainer> */}
        </SideRight>
    </Container>
);

export default PieChart;