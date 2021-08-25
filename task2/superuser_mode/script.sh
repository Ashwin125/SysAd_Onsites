#!/bin/bash

cp mobile.loadbalance.local.conf /etc/apache2/sites-available/
cp desktop.loadbalance.local.conf /etc/apache2/sites-available/
cp loadbalance.local.conf /etc/apache2/sites-available/

a2ensite mobile.loadbalance.local.conf
a2ensite desktop.loadbalance.local.conf
a2ensite loadbalance.local.conf

systemctl reload apache2

echo '127.0.0.1 mobile.loadbalance.local' >> /etc/hosts
echo '127.0.0.1 desktop.loadbalance.local' >> /etc/hosts
echo '127.0.0.1 loadbalance.local' >> /etc/hosts
