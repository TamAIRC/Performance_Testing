import pandas as pd

# Read data from CSV file
# df = pd.read_csv('./csv_test/Test_5request_10Threads_Ramp-up12_Loop1.csv')
df = pd.read_csv('./csv_test/Test_5request_50Threads_Ramp-up12_Loop1.csv')

# Calculate average response time
average_response_time_ms = df['elapsed'].mean()

# Calculate error rate
error_rate = 1 - (df['success'].sum() / len(df))
error_rate_percentage = error_rate * 100
# Calculate throughput
total_requests = len(df)
total_duration_seconds = (df['timeStamp'].max() - df['timeStamp'].min()) / 1000
throughput = total_requests / total_duration_seconds

# Print the calculated metrics
print("Average Response Time:", average_response_time_ms, "ms")
print("Error Rate:", error_rate_percentage, "%")
print("Throughput:", throughput, "requests/second")

# Test_5request_10Threads_Ramp-up12_Loop1.csv
# Average Response Time: 9088.52 ms
# Error Rate: 0.0 %
# Throughput: 0.9656051447442112 requests/second

# Test_5request_50Threads_Ramp-up12_Loop1
# Average Response Time: 65674.852 ms
# Error Rate: 2.0000000000000018 %
# Throughput: 0.7300783520087376 requests/second

# Test_5request_100Threads_Ramp-up12_Loop1
# Average Response Time: 262583.7 ms
# Error Rate: 14.473684210526317 %
# Throughput: 1.054919673419078 requests/second

# Test_5request_100Threads_Ramp-up20_Loop1
# Average Response Time: 118102.76086956522 ms
# Error Rate: 14.945652173913048 %
# Throughput: 1.0772108435321979 requests/second
