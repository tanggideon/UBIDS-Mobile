import { Dimensions, View } from "react-native";
import { BarChart } from "react-native-chart-kit";

const data = {
  labels: ["1991", "1992", "1993", "1994", "1995", "1996"],
  datasets: [
    {
      data: [30, 40, 45, 50, 49, 60]
    }
  ]
};

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientTo: "#fff",
  color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
  barPercentage: 0.7,
};

const PerformanceChart = () => {
  return (
    <View className="h-fit w-full items-center justify-center">
      <BarChart
        data={data}
        width={screenWidth - 32}
        height={220}
        chartConfig={chartConfig}
        verticalLabelRotation={0}
        yAxisLabel=""
        yAxisSuffix=""
      />
    </View>
  );
};

export default PerformanceChart;