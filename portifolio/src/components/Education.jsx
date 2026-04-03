import Dev from '../constants/Dev.json';
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
                <div className="education-container">
                    <h2>Competência</h2>
                    {Dev.map((text, index) => (
                        <div key={index} className="cardsEducations">
                            <ul style={{ color:"white", padding: 0 }}>
                                <div style={{ margin: "20px", decoration: "none" }}>
                                    <li><p>{text.CursoGraduação}</p></li>
                                    <progress value={progress} max="100"></progress>
                                </div>
                                <div style={{ margin: "20px" }}>
                                    <li><p>{text.CursoTec}</p></li>
                                    <progress value="100" max="100"></progress>
                                </div>
                                <div style={{ margin: "20px" }}>
                                    <li><p>{text.CursoExtra}</p></li>
                                    <progress value="100" max="100"></progress>
                                </div>
                                <div style={{ margin: "20px" }}>
                                    <li><p>{text.CursoExtra2}</p></li>
                                    <progress value="100" max="100"></progress>
                                </div>
                                <div style={{ margin: "20px" }}>
                                    <li><p>{text.CursoExtra3}</p></li>
                                    <progress value="100" max="100"></progress>
                                </div>
                            </ul>                    
                        <PieChart 
                            className='educationGrafico'
                            series={[
                                {
                                data: desktopOS,
                                highlightScope: { fade: 'global', highlight: 'item' },
                                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                valueFormatter,
                                },
                            ]}
                            height={300}
                            width={300}
                        />
                    </div>
                ))}
            </div>
            </section>
        </>
    );
}