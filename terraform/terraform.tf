terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }

  cloud {
    organization = "filipefigueredo"
    workspaces {
      name = "nestjs-aks-demo"
    }
  }

  required_version = "~> 1.3.0"
}
