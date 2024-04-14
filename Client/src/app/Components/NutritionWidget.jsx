"use client"
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const NutritionWidget = ({ recipeId }) => {
  const chartRef = useRef(null);
  const [nutritionData, setNutritionData] = useState(null);
  // const apiKey = "ae9fab0183fd48e9b6af4a983da4897f";
  const apiKey = "4ea43c3d4d094e73bd1279ff484b7acf";
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const fetchNutritionInfo = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.json?apiKey=${apiKey}`);
        if (response.ok) {
          const data = await response.json();
          if (data && data.nutrients) {
            setNutritionData(data.nutrients);
          } else {
            console.error('Nutritional information not available');
          }
        } else {
          console.error('Failed to fetch nutrition info');
        }
      } catch (error) {
        console.error('Error fetching nutrition info:', error);
      }
    };

    fetchNutritionInfo();
  }, [recipeId, apiKey]);

  useEffect(() => {
    if (chartRef.current && nutritionData) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy(); // Destroy existing chart
      }

      const ctx = chartRef.current.getContext('2d');
      const nutrientsData = {
        labels: ['Carbs', 'Protein', 'Fat', 'Vitamins', 'Minerals'],
        datasets: [{
          data: nutritionData.map(nutrient => nutrient.amount),
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)', // Carbs
            'rgba(54, 162, 235, 0.5)', // Protein
            'rgba(255, 205, 86, 0.5)', // Fat
            'rgba(75, 192, 192, 0.5)', // Vitamins
            'rgba(153, 102, 255, 0.5)', // Minerals
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1
        }]
      };

      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || '';
                if (label) {
                  return `${label}: ${nutritionData[context.dataIndex].amount}%`;
                }
                return '';
              }
            }
          }
        },
        scales: {
          r: {
            beginAtZero: true,
            suggestedMax: 100
          }
        }
      };

      chartInstanceRef.current = new Chart(ctx, {
        type: 'polarArea',
        data: nutrientsData,
        options: options
      });
    }
  }, [nutritionData]);

  return <canvas ref={chartRef} />;
};

export default NutritionWidget;