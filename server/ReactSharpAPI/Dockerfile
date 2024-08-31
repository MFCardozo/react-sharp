# https://hub.docker.com/_/microsoft-dotnet
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build



WORKDIR /source

# copy csproj and restore as distinct layers
COPY *.sln .
COPY ReactSharpAPI/*.csproj ./ReactSharpAPI/
RUN dotnet restore

# copy everything else and build app
COPY ReactSharpAPI/. ./ReactSharpAPI/
WORKDIR /source/ReactSharpAPI
RUN dotnet publish -c release -o /app --no-restore

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:6.0

RUN apt-get update \
    && apt-get install -y curl

WORKDIR /app
COPY --from=build /app ./
ENTRYPOINT ["dotnet", "ReactSharpAPI.dll"]