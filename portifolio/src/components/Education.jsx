import Dev from '../constants/Dev.json';
import './Education.css';
import { PieChart } from '@mui/x-charts/PieChart';
import { useState, useEffect } from 'react';

// Função para calcular o progresso da faculdade
export const calculateCollegeProgress = () => {
  const startDate = new Date(2025, 1, 1); // 02/2025
  const endDate = new Date(2028, 11, 31); // 12/2028
  const currentDate = new Date();

  const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
  const elapsedDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));

  const progressPercentage = Math.min(
    Math.max((elapsedDays / totalDays) * 100, 0),
    100
  );

  return Math.round(progressPercentage);
};

export const desktopOS = [
  {
    label: 'Front-end',
    value: 72.72,
  },
  {
    label: 'Figma',
    value: 16.38,
  },
  {
    label: 'Ux/Ui',
    value: 4.65,
  },
  {
    label: 'Back-end',
    value: 2.42,
  },
  {
    label: 'Other',
    value: 3.83,
  },
];

export const valueFormatter = (item) => `${item.value}%`;

export function Education(){
    const [progress, setProgress] = useState(calculateCollegeProgress());
    useEffect(() => {
        // Atualiza o progresso a cada minuto
        const interval = setInterval(() => {
            setProgress(calculateCollegeProgress());
        }, 60000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <section className="educations" id="education">
                <div className="conteiner">
                    <h2>Competência</h2>
                    {Dev.map((text, index) => (
                        <div key={index} className="cardsEducations">
                            <ul style={{ color:"white", padding: 0 }}>
                                <div className="cardProgress" >
                                    <li><p>{text.CursoGraduação}</p></li>
                                    <p><progress value={progress} max="100"></progress>
                                    {progress}%</p>
                                </div>
                                <div className="cardProgress" >
                                    <li><p>{text.CursoTec}</p></li>
                                    <p><progress value="100" max="100"></progress>
                                    100%</p>
                                </div>
                                <div className="cardProgress" >
                                    <li><p>{text.CursoExtra}</p></li>
                                    <p><progress value="100" max="100"></progress>
                                    100%</p>
                                </div>
                                <div className="cardProgress" >
                                    <li><p>{text.CursoExtra2}</p></li>
                                    <p><progress value="100" max="100"></progress>
                                    100%</p>
                                </div>
                                <div className="cardProgress" >
                                    <li><p>{text.CursoExtra3}</p></li>
                                    <p><progress value="100" max="100"></progress>
                                    100%</p>
                                </div>
                            </ul>
                        <PieChart 
                        className='editar'
                        series={[
                            {
                                data: desktopOS,
                                highlightScope: { fade: 'global', highlight: 'item' },
                                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                valueFormatter,
                            },
                        ]}
                        />
                    </div>
                ))}                
            </div>
            </section>
        </>
    );
}