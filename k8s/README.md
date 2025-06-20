# MediBook Kubernetes Deployment

Simple Kubernetes configuration for MediBook application.

## Files

- `kind-cluster.yaml` - Kind cluster configuration
- `namespace.yaml` - Creates medibook namespace
- `deployment.yaml` - App deployment with 2 replicas
- `service.yaml` - NodePort service on port 30000

## Usage

1. Create Kind cluster:
```bash
kind create cluster --config=k8s/kind-cluster.yaml
```

2. Apply Kubernetes manifests:
```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

3. Access application:
```bash
http://localhost:3000
```

## Commands

Check pods:
```bash
kubectl get pods -n medibook
```

Check service:
```bash
kubectl get svc -n medibook
```

Delete cluster:
```bash
kind delete cluster --name medibook-cluster
```
