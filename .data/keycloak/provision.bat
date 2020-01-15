SET INSTANCE=keycloak2

multipass launch -c 2 -d 30G -m 1G -n %INSTANCE%
multipass exec %INSTANCE% -- sudo apt-get update
multipass exec %INSTANCE% -- sudo apt-get install -y openjdk-8-jdk-headless
multipass exec %INSTANCE% -- wget https://downloads.jboss.org/keycloak/8.0.1/keycloak-8.0.1.tar.gz
multipass exec %INSTANCE% -- sudo tar -xf keycloak-8.0.1.tar.gz -C /opt/
multipass exec %INSTANCE% -- sudo ln -s /opt/keycloak-8.0.1/ /opt/keycloak
multipass exec %INSTANCE% -- /opt/keycloak/bin/add-user-keycloak.sh -u admin -p admin
multipass exec %INSTANCE% -- mkdir /opt/keycloak/parchment-realm
multipass transfer parchment-realm.json %INSTANCE%:/opt/keycloak/parchment-realm
multipass transfer parchment-users-0.json %INSTANCE%:/opt/keycloak/parchment-realm
multipass exec %INSTANCE% -- /opt/keycloak/bin/standalone.sh -b 0.0.0.0 -Dkeycloak.migration.action=import -Dkeycloak.migration.provider=dir -Dkeycloak.migration.dir=/opt/keycloak/parchment-realm -Dkeycloak.migration.strategy=OVERWRITE_EXISTING
