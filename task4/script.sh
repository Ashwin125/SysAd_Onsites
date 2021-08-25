#!/bin/bash

cp login.local.conf /etc/apache2/sites-available/

a2ensite login.local.conf

systemctl reload apache2

echo '127.0.0.1 login.local' >> /etc/hosts