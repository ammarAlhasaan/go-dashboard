const getWidthColor = (full: number, current: number) => {
  const width = (current * 100) / full;
  let color = ''
  if (width <= 35) {
    color = 'success'
  } else if (width > 35 && width <= 70) {
    color = 'warning'
  } else if (width > 70 && width <= 100) {
    color = 'danger'
  }
  return {
    width,
    color
  }
}
const getColor = (value: any) => {
  let color = ''
  if (value >= 20) {
    color = '#02C39A'
  } else if (value <= 19 && value >= 10) {
    color = '#FF9549'
  } else if (value <= 9 && value >= 0) {
    color = '#FF4C49'
  }
  return {
    data: [value, value - 30],
    color
  }
}
const getOptions = () => ({
  responsive: true,
  borderWidth: 0,
  circumference: 300,
  rotation: -150,
  cutout: "70%",
})
const getChartData = (data: number[], color: string = 'rgba(126, 93, 93, 1)') => {
  return {
    datasets: [
      {
        data,
        backgroundColor: [
          color,
          'rgba(238, 238, 238, 1)',
        ],
      },
    ],
  }
};
const getPlugins = (id: string, value: string, label: string, color: string = '#000') => [
  {
    id,
    beforeDraw: function (chart: any) {
      const width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();
      const fontSize = (height / 130).toFixed(3);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "top";
      const text = value,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

      const text2 = label,
        textX2 = Math.round((width - ctx.measureText(text).width) / 2) - 5,
        textY2 = height - (height / 8);
      ctx.fillText(text, textX, textY);
      ctx.fillStyle = color
      ctx.fillText(text2, textX2, textY2);
      ctx.save();
    },
  },
]
export {getPlugins, getChartData, getOptions, getColor, getWidthColor}
