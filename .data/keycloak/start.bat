SET INSTANCE=keycloak

multipass exec %INSTANCE% -- /opt/keycloak/bin/standalone.sh -b 0.0.0.0
